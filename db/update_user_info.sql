update tinycircuits_users 
set first_name = $1, 
    last_name = $2, 
    company = $3, 
    address = $4, 
    city = $5, 
    state = $6, 
    zip = $7, 
    phone = $8
where email = $9 returning *;