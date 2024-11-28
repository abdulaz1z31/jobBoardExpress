/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
    await knex.schema.createTable('joblisting', function (table) {
        table.uuid('id').primary().defaultTo(knex.raw('uuid_generate_v4()'))
        table.string('title').notNullable().unique()
        table.string('description').notNullable()
        table
            .integer('company_id')
            .unsigned()
            .references('id')
            .inTable('companies')
            .notNullable()
        table.string('location').notNullable()
        table.json('salaryRange').notNullable()
        table
            .enu('employmentType', [
                'full_time',
                'part_time',
                'contract',
                'temporary',
                'intership',
            ])
            .notNullable()
        table.jsonb('requirements').notNullable()
        table.enu('status', ['open', 'closed']).defaultTo('open').notNullable()
        table.timestamps(true, true)
    })
}

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = async function (knex) {
    await knex.schema.dropTable('joblisting')
}
