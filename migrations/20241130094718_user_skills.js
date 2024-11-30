/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable("user_skills", (table) => {
      table.uuid("id").primary();
      table.uuid("user_id").notNullable();
      table.uuid("skill_id").references("id").inTable("skills").onDelete("CASCADE");
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export async function down(knex) {
    await knex.schema.dropTableIfExists("user_skills");
  }
  
