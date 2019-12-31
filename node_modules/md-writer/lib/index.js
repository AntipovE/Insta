module.exports = class MdWriter {
    /**
     * @type {String}
     * @readonly
     */
    static get LF() {
        return '\n';
    }

    /**
     * @param {String} [infoString='']
     * @returns {String}
     * @see http://spec.commonmark.org/0.27/#code-fence
     * @see http://spec.commonmark.org/0.27/#info-string
     */
    static codeFence(infoString = '') {
        return `${'`'.repeat(3)}${infoString}`;
    }

    /**
     * @param {String} [code='']
     * @returns {String}
     * @see http://spec.commonmark.org/0.28/#code-span
     */
    static codeSpan(code = '') {
        return '`' + code + '`';
    }

    /**
     * @param {String} [code='']
     * @param {String} [infoString='']
     * @returns {String}
     * @see http://spec.commonmark.org/0.27/#fenced-code-blocks
     * @see http://spec.commonmark.org/0.27/#info-string
     */
    static fencedCodeBlock(code = '', infoString = '') {
        return [
            MdWriter.codeFence(infoString),
            code,
            MdWriter.codeFence()
        ].join(MdWriter.LF);
    }

    /**
     * @param {String} [code='']
     * @returns {String}
     * @see fencedCodeBlock
     */
    static fencedShCodeBlock(code = '') {
        return MdWriter.fencedCodeBlock(`$ ${code}`, 'sh');
    }

    /**
     * @param {String} [text='']
     * @returns {String}
     * @see http://spec.commonmark.org/0.27/#setext-headings
     */
    static h1(text = '') {
        return `${text}${MdWriter.LF}${'='.repeat(text.length)}`;
    }

    /**
     * @param {String} [text='']
     * @returns {String}
     * @see http://spec.commonmark.org/0.27/#setext-headings
     */
    static h2(text = '') {
        return `${text}${MdWriter.LF}${'-'.repeat(text.length)}`;
    }

    /**
     * @param {String} [text='']
     * @returns {String}
     * @see http://spec.commonmark.org/0.28/#atx-heading
     */
    static h3(text = '') {
        return `### ${text}`;
    }
};
