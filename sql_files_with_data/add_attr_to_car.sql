use jcars;

drop procedure if exists add_attr;

delimiter //
create procedure add_attr()
BEGIN
	DECLARE attrid INT DEFAULT 1;
	DECLARE carid int default 1;
    
	WHILE carid <= 20 DO
		while attrid <= 12 do 
			if attrid != 3 then
				insert into car_attributes(car_id,attributes_id) values (carid,attrid);
			end if;
			set attrid = attrid + 1;
		end while;
        
		set attrid=1; 
		set carid = carid + 1; 
	end while;
end //

delimiter ;

call add_attr();

drop procedure if exists add_attr;