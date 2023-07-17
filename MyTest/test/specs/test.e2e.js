// /**
//  * test with page objects
//  */
// const LoginPage = require('../pageobjects/login.page')
// const SecurePage = require('../pageobjects/secure.page')

// describe('My Login application', () => {
//     it('should login with valid credentials', async () => {
//         await LoginPage.open()

//         await LoginPage.login('tomsmith', 'SuperSecretPassword!')
//         await expect(SecurePage.flashAlert).toBeExisting()
//         await expect(SecurePage.flashAlert).toHaveTextContaining(
//             'You logged into a secure area!')
//     })
// })

// const assert = require('assert');

describe('Verify whether chai.js.com links on home page works correctly', () => {

    it('User should be able to launch home page of chaijs.com', async () => {
        await browser.url('https://www.chaijs.com');
        const title = await browser.getTitle();
        browser.pause(1000);
        // assert(title === 'Chai', "title is not Chai");
        assert.equal(title, 'Chai', 'title is not Chai')
    });

    it('User should be able to navigate to  Guid Page of chaijs.com', async () => {
        browser.url('https://www.chaijs.com');
        const element = await $('//*[@href="/guide"]');
        await element.click();
        browser.pause(5000);
        const title = await browser.getTitle();
        // assert(title === 'Getting Started Guide - ' +
        //     'Chai', "title is not 'Getting Started Guide - Chai'`${title}`");

        expect(title).to.be.a('string').and.equal('Getting Started Guide - Chai', "title is not 'Getting Started Guide -Chai'");
    });

    it('User should be able to navigate to API Page of chaijs.com', async () => {
        browser.url('https://chaijs.com');
        const element = await $('a[href="/api"]');
        await element.click();
        browser.pause(5000);
        const title = await browser.getTitle()

        // assert(title === 'Introduction - Chai',
        //  "title is not 'Introduction - Chai");

        title.should.be.a('string').and.equal('Introduction - Chai',
         "title is not 'Introduction - Chai'")

    });

    it('User should be able to navigate to the Plugin page of chaijs.com', async () => {
        browser.url('https://chaijs.com');
        const element = await $('a[href="/plugins"]');
        await element.click();
        browser.pause(5000);
        const title = await browser.getTitle();

        // assert(title === 'Chai', 
        // "title is not 'Chai'");

        expect(title).to.be.a('string').and.equal('Chai', "Plugin Page title is not Chai")
    })
})


