import { ChainablePromiseElement } from 'webdriverio';

import Page from './page';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SecurePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get flashAlert () {
        return $('#flash');
    }

    public get btnLogOut() {
        return $('a[href="/logout"]');
    }

    public async logout () {
        await this.btnLogOut.click()
    }
}

export default new SecurePage();
