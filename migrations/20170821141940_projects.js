exports.up = (knex) => {
  return knex.schema.createTable('projects', (table) => {
    table
      .increments();
    table
      .string('project_name')
      .notNullable()
      .defaultTo('Default Name');
    table
      .string('heading')
      .notNullable()
      .defaultTo('Default Heading');
    table
      .string('blurb')
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
      .string('stack')
      .notNullable()
      .defaultTo('javascript');
    table
      .timestamp(true, true);
  }
};

exports.down = (knex) => {
  return knex.schema.dropTable('projects');
};
