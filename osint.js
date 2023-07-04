// CSC 842 Cycle 7 project by Max Gorbachevsky
// This program uses Puppeteer modules to help running Google directives searches, 
//  saves results and screenshots to files.

// import puppeteer library
const puppeteer = require('puppeteer')

// import function to write to file
const fs = require('fs')

// import inquirer function for menu (search term and Google directive)
const inquirer = require('inquirer')


// create interactive menu
inquirer
  .prompt([
    {
      name: 'phrase',
      type: 'input',
      message: 'Please enter your search item:'
    },

    {

      type: 'list',
      name: 'directive',
      message: 'Which Google Directive would you like to use?:',
      choices: ['allinanchor:', 'allintext:', 'allintitle:', 'allinurl:', 'author:', 'cache:', 'define:', 'ext:',
        'filetype:']
    }

  ])
  .then(async (answer) => {
    const { phrase, directive } = answer

    console.log(`Looking for: ${phrase} ${directive}`)

    // create browser instance and launch it
    const browser = await puppeteer.launch({
      headless: false,
      defaultViewport: null,
      args: ['--no-sandbox', '--start-fullscreen']
    })

    // open up new page
    const page = await browser.newPage()

    // go to google and wait
    // argument considers navigation successful when page has no more then 2 network requests for half a second
    await page.goto('https://google.com', {
      waitUntil: 'networkidle2'
    })

    // input with name "q"
    await page.waitForSelector('textarea[name=q]')

    // type the phrase
    await page.type('textarea[name=q]', `${directive} ${phrase}`)

    //
    await page.keyboard.press('Enter')

    // wait for results
    await page.waitForSelector('#result-stats')
    const imageName = `${phrase}_${directive}.png`
    
    // take the screenshot
    await page.screenshot({ path: './Screenshots/' + imageName })

    // map through all anchors "a's" and return "href" and link text
    const links = await page.evaluate(() =>
      Array.from(document.querySelectorAll('a')).map((anchor) => [anchor.href, anchor.textContent])
    )
    const fileName = `${phrase}_${directive}.txt`

    fs.writeFile('./Results/' + fileName, JSON.stringify(links, false, '\t'), (err) => {
      if (err) throw err
    })

    // keep the page up for 3 seconds
    await page.waitForTimeout(3000).then(() => {
      console.log(links)
    })

    // close the tab
    await page.close()

    // close the browser
    await browser.close()
  })
