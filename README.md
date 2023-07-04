# CSC842-Summer2023-Cycle7

**OSINT gathering with Puppeteer**

The Pen Testing recon phase includes OSINT gathering. Everyone uses Google Directives to improve search results. We discuss this when teaching OSINT; however, when running a Google search, we often forget about using the directives, and if we don’t use some directives for a while, we might forget about them at all. This program is written in JavaScript, it utilizes Puppeteer modules to launch a web browser, search for terms, take a screenshot of the search results, and save the search results to a file. This program could be a great tool during the recon phase of a Pen Test. I have never worked with JavaScript before, so creating the tool involved a long chain of trials and errors until I found Eslint, which allows checking JS files for errors. (https://eslint.org/)

**Three main ideas:**
1.	Puppeteer is a Node.js library that provides a high-level API to control Chrome/Chromium. It runs in headless mode by default and allows one to test websites, take screenshots, generate files, etc. (https://pptr.dev/)
2.	Google Directives or Search Operators provide precise search, which significantly improves the results of a Google search. They allow users to search for particular terms instead of getting a flood of information in the results. (https://www.googleguide.com/advanced_operators_reference.html)
3.	Pen Testing always begins with information gathering, which includes using Google search. A good pen tester consistently documents the search by saving screenshots and search results. Saving files also helps future information analysis.

**Limitations and future work**
I started working on the project within a VM in M1 MacBook Pro. After lengthy attempts at configuring the dependencies, I have learned that many libraries are not available for ARM architecture. I had to build vApp in Projects in IALAB. Thank you, DSU!

**Running the program**
I am adding a bash script to install all the necessary prerequisites. All you need to do is navigate to your directory and run node osint.js. You may have to install more libraries that are missing in your system (individual). Happy searching!

Special Thanks
I would like to thank DSU for providing IALAB, where we can work on our own projects.
I would like to thank my friend, Sebastian Szchech, who gave me the idea of using Puppeteer and helped me find my way around JavaScript.
