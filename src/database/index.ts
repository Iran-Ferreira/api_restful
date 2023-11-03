import { PostgresDataSource } from "../../db_config";

const main = async() => {
    console.time('main');
    await PostgresDataSource.initialize();
};

main().catch(err => {
    console.error(err);
    process.exit(1);
});