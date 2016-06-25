class CreateReports < ActiveRecord::Migration
  def change
    create_table :reports do |t|
      t.string :api_key
      t.string :classifier_id
      t.timestamps null: false
    end
  end
end
