puts "seeding teachers..."
t1 = Teacher.create(name: "Andrea Esparza", pronouns: "she/her/hers", username: "aesparza", password: "12345", admin: false)
t2 = Teacher.create(name: "Ryan Ray", pronouns: "he/him/his", username: "rray", password: "12345", admin: false)
t3 = Teacher.create(name: "Emma Ensign-Church", pronouns: "she/her/hers", username: "eensignchurch", password: "12345", admin: false)
t4 = Teacher.create(name: "Jeremy Myers", pronouns: "he/him/his", username: "jmyers", password: "12345", admin: false)
t5 = Teacher.create(name: "Jaime Estes", pronouns: "she/her/hers", username: "jestes", password: "12345", admin: false)

puts "seeding students..."
s1 = Student.create(first_name: "Jon", last_name: "Snow", preferred_name: "King in the North", pronouns: "he/him/his", private_pronouns: false, extra_info: "Winter is coming.", grade_level: 11, username: "jsnow", password: "12345", admin: false)
s2 = Student.create(first_name: "Mickey", last_name: "Mouse", preferred_name: nil, pronouns: "he/him/his", private_pronouns: false, extra_info: "I can play the harmonica.", grade_level: 9, username: "mmouse", password: "12345", admin: false)
s3 = Student.create(first_name: "Red", last_name: "Power Ranger", preferred_name: nil, pronouns: "he/him/his", private_pronouns: true, extra_info: "I don't want to be the leader.", grade_level: 12, username: "rpowerranger", password: "12345", admin: false)
s4 = Student.create(first_name: "Harry", last_name: "Styles", preferred_name: nil, pronouns: "he/him/his", private_pronouns: false, extra_info: "Music for a sushi restaurant.", grade_level: 11, username: "hstyles", password: "12345", admin: false)
s5 = Student.create(first_name: "Derek", last_name: "Jeter", preferred_name: nil, pronouns: "he/him/his", private_pronouns: true, extra_info: "#2.", grade_level: 9, username: "djeter", password: "12345", admin: false)
s6 = Student.create(first_name: "Jennifer", last_name: "Lopez", preferred_name: "JLo", pronouns: "she/her/hers", private_pronouns: false, extra_info: nil, grade_level: 9, username: "jlopez", password: "12345", admin: false)

puts "seeding sections..."
c1 = Section.create(period: 1, subject: "Math", teacher_id: t1.id)
c2 = Section.create(period: 2, subject: "Math", teacher_id: t1.id)
c3 = Section.create(period: 3, subject: "Math", teacher_id: t1.id)
c4 = Section.create(period: 2, subject: "English", teacher_id: t2.id)
c5 = Section.create(period: 3, subject: "English", teacher_id: t2.id)
c6 = Section.create(period: 5, subject: "Math", teacher_id: t3.id)
c7 = Section.create(period: 6, subject: "Science", teacher_id: t4.id)
c8 = Section.create(period: 4, subject: "Art", teacher_id: t1.id)

puts "seeding assignments..."
a1 = Assignment.create(title: "New Student Form", due_date: Date.today, section: c1)
a2 = Assignment.create(title: "Homework 1", due_date: Date.today, section: c1)
a3 = Assignment.create(title: "Homework 2", due_date: Date.yesterday, section: c2)
a4 = Assignment.create(title: "Test 1", due_date: Date.tomorrow, section: c1)
a5 = Assignment.create(title: "Project 1", due_date: Date.tomorrow, section: c3)
a6 = Assignment.create(title: "Mirrors", due_date: Date.today, section: c8)

puts "seeding section-student-join table..."
ssj1 = SectionStudentJoin.create(section: c1, student: s1)
ssj2 = SectionStudentJoin.create(section: c1, student: s2)
ssj3 = SectionStudentJoin.create(section: c1, student: s3)
ssj4 = SectionStudentJoin.create(section: c2, student: s4)
ssj5 = SectionStudentJoin.create(section: c2, student: s5)
ssj6 = SectionStudentJoin.create(section: c6, student: s5)
ssj8 = SectionStudentJoin.create(section: c8, student: s1)
ssj9 = SectionStudentJoin.create(section: c8, student: s2)
ssj10 = SectionStudentJoin.create(section: c8, student: s3)
ssj11 = SectionStudentJoin.create(section: c8, student: s4)
ssj12 = SectionStudentJoin.create(section: c8, student: s5)
ssj13 = SectionStudentJoin.create(section: c8, student: s6)

puts "seeding assignment-student-join table"
asj1 = AssignmentStudentJoin.create(assignment: a1, student: s1)
asj2 = AssignmentStudentJoin.create(assignment: a1, student: s2)
asj3 = AssignmentStudentJoin.create(assignment: a1, student: s3)
asj4 = AssignmentStudentJoin.create(assignment: a1, student: s4)
asj5 = AssignmentStudentJoin.create(assignment: a2, student: s2)
asj6 = AssignmentStudentJoin.create(assignment: a2, student: s5)
asj7 = AssignmentStudentJoin.create(assignment: a3, student: s5)
asj8 = AssignmentStudentJoin.create(assignment: a4, student: s1)
asj9 = AssignmentStudentJoin.create(assignment: a5, student: s2)
asj13 = AssignmentStudentJoin.create(assignment: a3, student: s4)
asj10 = AssignmentStudentJoin.create(assignment: a2, student: s4)
asj12 = AssignmentStudentJoin.create(assignment: a6, student: s1)
asj14 = AssignmentStudentJoin.create(assignment: a6, student: s4)
asj15 = AssignmentStudentJoin.create(assignment: a6, student: s6)
asj16 = AssignmentStudentJoin.create(assignment: a6, student: s5)
asj17 = AssignmentStudentJoin.create(assignment: a6, student: s3)
asj18 = AssignmentStudentJoin.create(assignment: a6, student: s2)

puts "...done"