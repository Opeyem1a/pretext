import { execSync } from 'node:child_process';

const MANIFEST_DIR =
    process.env.BROWSER === 'firefox' ? 'dist/firefox' : 'dist/chrome';

const PROD_ZIP_FILE_NAME = 'extension';

(function main() {
    console.log('Creating production extension zip...');
    execSync(`(cd ${MANIFEST_DIR} && zip -r ${PROD_ZIP_FILE_NAME} .)`);
    console.log(
        `✅ Created ${MANIFEST_DIR}/${PROD_ZIP_FILE_NAME}.zip for production.`
    );
})();
