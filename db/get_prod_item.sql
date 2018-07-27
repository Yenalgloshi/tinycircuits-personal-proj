select inv.id, name, part_num, price, stock_qty, description, image, img_url from tinycircuits_inv as inv
join tinycircuits_imgs as img
on inv.id = img.item_id where item_id = $1;