const sel = require ('../../data/selectors.json');
const exp = require ('../../data/expected.json');
const data = require ('../../data/testData.json');
describe('Inputs', function () {
    describe('Inputs are displayed', function () {
        it('TC-014 Name ', function () {
            browser.url('');
            const name = $(sel.name).isDisplayed();
            expect(name).toEqual(true);
        });
        it('TC-015 Gender (he)', function () {
            const gender = $$(sel.gender)[0].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-016 Gender (she)', function () {
            const gender = $$(sel.gender)[1].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-017 Gender (it)', function () {
            const gender = $$(sel.gender)[2].isDisplayed();
            expect(gender).toEqual(true);
        });
        it('TC-018 Age', function () {
            const label = $(sel.age).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-019 Story', function () {
            const label = $(sel.story).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-020 Create', function () {
            const label = $(sel.create).isDisplayed();
            expect(label).toEqual(true);
        });
        it('TC-021 Input field name A', function () { /* TC017 */
            browser.url('');
            $(sel.name).setValue(data.nameA);
            const nameA = $(sel.name).getValue();
            expect(nameA).toEqual(data.nameA);
        });
        it('TC-021.1 Input field name 1', function () { /* TC017.1 */
            browser.url('');
            $(sel.name).setValue(data.name1);
            const name1 = +$(sel.name).getValue();
            expect(name1).toEqual(data.name1);
        });
        it('TC-021.2 Input field name $', function () { /* TC017.2 */
            browser.url('');
            $(sel.name).setValue(data.name$);
            const name$ = $(sel.name).getValue();
            expect(name$).toEqual(data.name$);
        });
        it('TC-022 Input field name 70 symb', function () { /* TC018 */
            browser.url('');
            $(sel.name).setValue(data.name70);
            const name70 = $(sel.name).getValue();
            expect(name70).toEqual(data.name70);
        });
        it('TC-023 Input field name Rus', function () { /* TC019 */
            browser.url('');
            $(sel.name).setValue(data.nameRus);
            const nameRus = $(sel.name).getValue();
            expect(nameRus).toEqual(data.nameRus);
        });
        it('TC-024 Input field name 71 symb', function () { /* TC020 */
            browser.url('');
            $(sel.name).setValue(data.name71);
            const symbolMax = $(sel.symbolMax).getValue();
            expect(symbolMax).valueOf(data.symbolmax);
        });
        it('TC-025 Input field name > 71 symbols', function () {      //TC-021
            browser.url('');
            const input = $(sel.name).setValue(data.name71);
            browser.pause(4000);
            $(sel.name).doubleClick();
            browser.pause(4000);
            browser.keys(["\uE009" + "x", "\uE000"]);
            browser.pause(4000);
            $(sel.name).click();
            browser.pause(4000);
            browser.keys(["\uE008" + "\uE016", "\uE000"]);
            browser.pause(4000);
            const error = $('.ant-form-item-has-error').isExisting();
            expect(error).toEqual(true);
        });
    });
    describe('Placeholders are correct', function () {
    });
})