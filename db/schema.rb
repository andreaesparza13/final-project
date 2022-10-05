# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_10_04_230834) do
  create_table "assignment_student_joins", force: :cascade do |t|
    t.integer "assignment_id", null: false
    t.integer "student_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["assignment_id"], name: "index_assignment_student_joins_on_assignment_id"
    t.index ["student_id"], name: "index_assignment_student_joins_on_student_id"
  end

  create_table "assignments", force: :cascade do |t|
    t.string "title"
    t.date "due_date"
    t.integer "section_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["section_id"], name: "index_assignments_on_section_id"
  end

  create_table "section_student_joins", force: :cascade do |t|
    t.integer "student_id", null: false
    t.integer "section_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["section_id"], name: "index_section_student_joins_on_section_id"
    t.index ["student_id"], name: "index_section_student_joins_on_student_id"
  end

  create_table "sections", force: :cascade do |t|
    t.integer "period"
    t.string "subject"
    t.integer "teacher_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["teacher_id"], name: "index_sections_on_teacher_id"
  end

  create_table "students", force: :cascade do |t|
    t.string "first_name"
    t.string "last_name"
    t.string "preferred_name"
    t.string "pronouns"
    t.boolean "private_pronouns"
    t.text "extra_info"
    t.string "username"
    t.string "password_digest"
    t.integer "grade_level"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: false
  end

  create_table "teachers", force: :cascade do |t|
    t.string "name"
    t.string "pronouns"
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "admin", default: false
  end

  add_foreign_key "assignment_student_joins", "assignments"
  add_foreign_key "assignment_student_joins", "students"
  add_foreign_key "assignments", "sections"
  add_foreign_key "section_student_joins", "sections"
  add_foreign_key "section_student_joins", "students"
  add_foreign_key "sections", "teachers"
end
