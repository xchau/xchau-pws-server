exports.up = (knex) => {
  return knex.schema.createTable('projects', (table) => {
    table
      .increments();
    table
      .string('project_name')
      .notNullable()
      .defaultTo('Default Name');
    table
      .string('path_name')
      .notNullable()
      .defaultTo('Default Path');
    table
      .string('heading')
      .notNullable()
      .defaultTo('Default Heading');
    table
      .text('blurb')
      .notNullable()
      .defaultTo('Default Blurb');
    table
      .string('github')
      .notNullable()
      .defaultTo('https://github.com/xchau');
    table
      .string('deployed_at')
      .notNullable()
      .defaultTo('');
    table
      .string('demo_link')
      .notNullable()
      .defaultTo('');
    table
      .string('stack')
      .notNullable()
      .defaultTo('javascript');
    table
      .text('primary_use_case')
      .notNullable()
      .defaultTo('Default PUC');
    table
      .text('primary_user')
      .notNullable()
      .defaultTo('Default primary user');
    table
      .string('hero_link')
      .notNullable()
      .defaultTo('');
    table
      .timestamps(true, true);
  });
};

exports.down = (knex) => {
  return knex.schema.dropTable('projects');
};
