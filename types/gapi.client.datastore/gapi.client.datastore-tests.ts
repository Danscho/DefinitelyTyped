/* This is stub file for gapi.client.{{=it.name}} definition tests */
/* IMPORTANT.
* This file was automatically generated by https://github.com/Bolisov/google-api-typings-generator. Please do not edit it manually.
* In case of any problems please post issue to https://github.com/Bolisov/google-api-typings-generator
**/
gapi.load('client', () => {
    /** now we can use gapi.client */
    gapi.client.load('datastore', 'v1', () => {
        /** now we can use gapi.client.datastore */

        /** don't forget to authenticate your client before sending any request to resources: */
        /** declare client_id registered in Google Developers Console */
        const client_id = '<<PUT YOUR CLIENT ID HERE>>';
        const scope = [
            /** View and manage your data across Google Cloud Platform services */
            'https://www.googleapis.com/auth/cloud-platform',
            /** View and manage your Google Cloud Datastore data */
            'https://www.googleapis.com/auth/datastore',
        ];
        const immediate = true;
        gapi.auth.authorize({ client_id, scope, immediate }, authResult => {
            if (authResult && !authResult.error) {
                /** handle succesfull authorization */
                run();
            } else {
                /** handle authorization error */
            }
        });
        run();
    });

    async function run() {
        /**
         * Allocates IDs for the given keys, which is useful for referencing an entity
         * before it is inserted.
         */
        await gapi.client.projects.allocateIds({
            projectId: "projectId",
        });
        /** Begins a new transaction. */
        await gapi.client.projects.beginTransaction({
            projectId: "projectId",
        });
        /**
         * Commits a transaction, optionally creating, deleting or modifying some
         * entities.
         */
        await gapi.client.projects.commit({
            projectId: "projectId",
        });
        /** Looks up entities by key. */
        await gapi.client.projects.lookup({
            projectId: "projectId",
        });
        /** Rolls back a transaction. */
        await gapi.client.projects.rollback({
            projectId: "projectId",
        });
        /** Queries for entities. */
        await gapi.client.projects.runQuery({
            projectId: "projectId",
        });
    }
});
