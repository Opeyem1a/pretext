import fs from 'fs';
import { jsonParse } from '../src/utils/json';

const MANIFEST_PATH = 'dist/firefox/manifest.json';

function removeMockGeckoId() {
    const rawManifest = fs.readFileSync(MANIFEST_PATH, 'utf-8');
    const manifestJson = jsonParse(rawManifest);

    const browserSpecificSettings = manifestJson['browser_specific_settings'];
    if (
        typeof browserSpecificSettings !== 'object' ||
        browserSpecificSettings === null ||
        Array.isArray(browserSpecificSettings)
    )
        return;

    delete browserSpecificSettings['gecko'];
    fs.writeFileSync(MANIFEST_PATH, JSON.stringify(manifestJson), {
        encoding: 'utf8',
    });
    console.log(`Removed dev-only mock gecko id from ${MANIFEST_PATH}`);
}

(function main() {
    console.log(`Preparing ${MANIFEST_PATH} for production...`);
    removeMockGeckoId();
    console.log(`✅ Prepared ${MANIFEST_PATH} for production.`);
})();
