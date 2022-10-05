class Teacher < ApplicationRecord
   has_many :sections, dependent: :destroy
   # has_many :section_student_joins, through: :sections
   # has_many :students, through: :sections

   validates :username, presence: true, uniqueness: true
   validates :name, presence: true

   has_secure_password

   def find_students
      Teacher.joins(sections: :students).select("students.*").where(id: self.id).distinct
   end

   def find_students_sql
      sql = <<~SQL
               SELECT DISTINCT students.* FROM "teachers" INNER JOIN "sections" ON "sections"."teacher_id" = "teachers"."id" INNER JOIN "section_student_joins" ON "section_student_joins"."section_id" = "sections"."id" INNER JOIN "students" ON "students"."id" = "section_student_joins"."student_id" WHERE "teachers"."id" = $1
            SQL
      ActiveRecord::Base.connection.exec_query(sql, "SQL", [1])
   end
end
