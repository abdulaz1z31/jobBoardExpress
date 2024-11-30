/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('wishlist', (table) => {
        table.uuid('id').primary()
        table.uuid('user_id').notNullable()
        table.uuid('company_id').notNullable()
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTableIfExists('wishlist')
}
