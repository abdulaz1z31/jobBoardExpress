/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable("categories", (table) => {
      table.uuid("id").primary();
      table.string("name").notNullable();
      table.text("description");
      table.timestamps(true, true)
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export async function down(knex) {
    await knex.schema.dropTableIfExists("categories");
  }
  