create table nguoi_dung (
	nguoi_dung_id int not null primary key auto_increment,
	email varchar(80),
	mat_khau varchar(80),
	ho_ten varchar(80),
	tuoi int,
	anh_dai_dien varchar(80)
);

create table hinh_anh (
	hinh_id int not null primary key auto_increment,
	ten_hinh varchar(80),
	duong_dan varchar(80),
	mo_ta varchar(80),
	nguoi_dung_id int, 
	foreign key(nguoi_dung_id) references nguoi_dung(nguoi_dung_id) on delete cascade
);

create table luu_anh (
	luu_anh_id int not null primary key auto_increment,
	nguoi_dung_id int,
	foreign key(nguoi_dung_id) references nguoi_dung(nguoi_dung_id) on delete cascade,
	hinh_id int,
	foreign key(hinh_id) references hinh_anh(hinh_id) on delete cascade,
	ngay_luu date
);

create table binh_luan (
	binh_luan_id int not null primary key auto_increment,
	nguoi_dung_id int,
	foreign key(nguoi_dung_id) references nguoi_dung(nguoi_dung_id) on delete cascade,
	hinh_id int, 
	foreign key(hinh_id) references hinh_anh(hinh_id) on delete cascade,
	ngay_binh_luan date,
	noi_dung varchar(80)
);

insert into nguoi_dung (email, mat_khau, ho_ten, tuoi, anh_dai_dien) values 
	("nam@gmail.com","1234","namnguyen",19,"nam.jpg");


insert into hinh_anh (ten_hinh, duong_dan, mo_ta, nguoi_dung_id) values 
	("nam2.jpg","...","hinh cua Nam 22",2);


insert into luu_anh (nguoi_dung_id, hinh_id, ngay_luu)values 
	(2, 3, "2024-01-02");


insert into binh_luan (nguoi_dung_id, hinh_id, ngay_binh_luan, noi_dung) values
	(2,3,"2024-02-02","Noi dung 2")
