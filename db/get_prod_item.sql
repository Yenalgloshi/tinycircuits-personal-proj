select * from tinycircuits_inv as inv
join tinycircuits_imgs as img
on inv.id = img.item_id where item_id = $1;