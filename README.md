
# Redux toolkit- Code generation

## Configuration pour commencer un projet avec ‘CODE generation’
https://redux-toolkit.js.org/rtk-query/usage/code-generation)


- `npx clear-npx-cache`
- Create un projet react redux ts `npx create-react-app my-app --template redux-typescript` (https://redux.js.org/introduction/getting-started)
- Installer les modules `yarn start`
- Create un dossier ‘store’ (https://redux-toolkit.js.org/rtk-query/usage/code-generation)
- Déplacer le ficher ‘store.ts’ dans le dossier ‘store’, Changer le nom de ficher à ‘index.ts’, changer les imports corespendant
- Create un ficher ‘emptyApi.ts’ 
￼
- Create un ficher `openapi-config.json` dans le dossier racine
￼
- Add ficher yaml dans le dossier racine, modifier le schemaFile, ex`admin.yaml`
- Génerer un ficher automatique avec`npx @rtk-query/codegen-openapi openapi-config.json`
- Verifier s’il y a des erreurs
- OK


## command for generate : 

```bash
npx @rtk-query/codegen-openapi openapi-config.json
```