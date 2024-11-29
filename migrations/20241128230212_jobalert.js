/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('jobalert', function (table) {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table
            .integer('job_id')
            .unsigned()
            .references('id')
            .inTable('joblisting')
            .notNullable()
        table
            .integer('user_id')
            .unsigned()
            .references('id')
            .inTable('users')
            .notNullable()
        table.timestamps(true, true)
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function down(knex) {
    await knex.schema.dropTable('jobalert')
}
