/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function up(knex) {
    await knex.schema.createTable('users', function (table) {
      table.increments('id').primary(); // Avtomatik raqamlanadigan ID
      table.string('email').notNullable().unique(); // Email maydoni (takrorlanmas)
      table.string('password').notNullable(); // Parol
      table.enum('role', ['admin', 'user']).notNullable().defaultTo('user'); // Rol (admin yoki user)
      table.string('first_name').notNullable(); // Ism
      table.string('last_name').notNullable(); // Familiya
      table.timestamps(true, true); // created_at va updated_at ustunlari
    });
  }
  
  /**
   * @param { import("knex").Knex } knex
   * @returns { Promise<void> }
   */
  export async function down(knex) {
    await knex.schema.dropTable('users'); // Jadvalni o'chirish
  }
  