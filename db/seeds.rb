
puts "seeding teachers..."
t1 = Teacher.create(name: "Andrea Esparza", pronouns: "she/her/hers", username: "aesparza", password: "12345", admin: true)
t2 = Teacher.create(name: "Ryan Ray", pronouns: "he/him/his", username: "rray", password: "12345", admin: true)
t3 = Teacher.create(name: "Emma Ensign-Church", pronouns: "she/her/hers", username: "eensignchurch", password: "12345", admin: true)
t4 = Teacher.create(name: "Jeremy Myers", pronouns: "he/him/his", username: "jmyers", password: "12345", admin: true)
t5 = Teacher.create(name: "Jaime Estes", pronouns: "she/her/hers", username: "jestes", password: "12345", admin: true)

puts "seeding students..."
s1 = Student.create(first_name: "Jon", last_name: "Snow", preferred_name: nil, pronouns: "he/him/his", private_pronouns: false, extra_info: "Winter is coming.", grade_level: 11, username: "jsnow", password: "12345")
s2 = Student.create(first_name: "Mickey", last_name: "Mouse", preferred_name: nil, pronouns: "he/him/his", private_pronouns: false, extra_info: "I can play the harmonica.", grade_level: 9, username: "mmouse", password: "12345")
s3 = Student.create(first_name: "Red", last_name: "Power Ranger", preferred_name: "rpowerranger", pronouns: "he/him/his", private_pronouns: true, extra_info: "I don't want to be the leader.", grade_level: 12, username: "rpowerranger", password: "12345")
s4 = Student.create(first_name: "Harry", last_name: "Styles", preferred_name: nil, pronouns: "he/they", private_pronouns: false, extra_info: "Music for a sushi restaurant.", grade_level: 11, username: "hstyles", password: "12345")
s5 = Student.create(first_name: "Derek", last_name: "Jeter", preferred_name: nil, pronouns: "he/him/his", private_pronouns: true, extra_info: "#2.", grade_level: 9, username: "djeter", password: "12345")

puts "seeding sections..."
c1 = Section.create(period: 1, subject: "Math", teacher: t1)
c2 = Section.create(period: 2, subject: "Math", teacher: t1)
c3 = Section.create(period: 3, subject: "Math", teacher: t1)
c4 = Section.create(period: 2, subject: "English", teacher: t2)
c5 = Section.create(period: 3, subject: "English", teacher: t2)
c6 = Section.create(period: 5, subject: "Math", teacher: t3)
c7 = Section.create(period: 6, subject: "Science", teacher: t4)
c8 = Section.create(period: 4, subject: "Art", teacher: t5)

puts "seeding assignments..."
a1 = Assignment.create(title: "New Student Form", due_date: nil, turned_in: false, score: nil, priority: false, section: c1, student: s1)
a2 = Assignment.create(title: "Homework 1", due_date: nil, turned_in: false, score: nil, priority: false, section: c1, student: s1)
a3 = Assignment.create(title: "Homework 2", due_date: nil, turned_in: false, score: nil, priority: false, section: c2, student: s2)
a4 = Assignment.create(title: "Test 1", due_date: nil, turned_in: false, score: nil, priority: false, section: c1, student: s4)
a5 = Assignment.create(title: "Project 1", due_date: nil, turned_in: false, score: nil, priority: false, section: c8, student: s5)
a6 = Assignment.create(title: "Test 2", due_date: nil, turned_in: false, score: nil, priority: false, section: c2, student: s3)

puts "seeding join table..."
ssj1 = SectionStudentJoin.create(section: c1, student: s1)
ssj2 = SectionStudentJoin.create(section: c1, student: s2)
ssj3 = SectionStudentJoin.create(section: c1, student: s3)
ssj4 = SectionStudentJoin.create(section: c2, student: s4)
ssj5 = SectionStudentJoin.create(section: c2, student: s4)
ssj6 = SectionStudentJoin.create(section: c6, student: s5)
ssj7 = SectionStudentJoin.create(section: c8, student: s1)

puts "...done"