insert into tinycircuits_users ( first_name, last_name, email, company, address, city, state, zip, phone ) 
values ( $1, $2, $3, $4, $5, $6, $7, $8, $9 ) returning *;