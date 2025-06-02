interface StandaloneIIFEScriptConfig {
    target: string;
    outDir: string;
    entryFileNames: string;
}

interface StandaloneCssConfig {
    target: string;
    outDir: string;
    assetFileNames: string;
}

const BASE_DIST_DIR =
    process.env.BROWSER === 'firefox' ? 'dist/firefox' : 'dist/chrome';

const STANDALONE_SCRIPT_CONFIG_DEFS: Record<
    string,
    StandaloneIIFEScriptConfig
> = {
    ui: {
        target: 'src/content/main/main.ts',
        outDir: `${BASE_DIST_DIR}/content`,
        entryFileNames: 'main.js',
    },
    background: {
        target: 'src/background.ts',
        outDir: `${BASE_DIST_DIR}/background`,
        entryFileNames: 'background.js',
    },
};

const STANDALONE_CSS_CONFIG_DEFS: Record<string, StandaloneCssConfig> = {
    main: {
        target: 'src/content/main/main.css',
        outDir: `${BASE_DIST_DIR}/content`,
        assetFileNames: 'main.css',
    },
};

export type { StandaloneIIFEScriptConfig, StandaloneCssConfig };
export {
    BASE_DIST_DIR,
    STANDALONE_SCRIPT_CONFIG_DEFS,
    STANDALONE_CSS_CONFIG_DEFS,
};
