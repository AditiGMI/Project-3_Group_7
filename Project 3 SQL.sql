-- Creating Table
Drop Table Major_Cities

CREATE TABLE Major_Cities(
    NYC DATE NOT NULL,
    NYC_Carbon_Monoxide INT NOT NULL,
    NYC_UV_Index FLOAT NOT NULL,
    Beijing DATE NOT NULL,
    Beijing_Carbon_Monoxide INT NOT NULL,
    Beijing_UV_Index FLOAT NOT NULL,
	Londin DATE NOT NULL,
	London_Carbon_Monoxide INT NOT NULL,
	London_UV_Index FLOAT NOT NULL,
	Tokyo DATE NOT NULL,
    Tokyo_Carbon_Monoxide INT NOT NULL,
    Tokyo_UV_Index FLOAT NOT NULL,
	MXC DATE NOT NULL,
	MXC_Carbon_Monoxide INT NOT NULL,
	MXC_UV_Index FLOAT NOT NULL
);

Select * From Major_Cities

-- Creating Table
Drop Table Small_Cities

CREATE TABLE Small_Cities(
    Zurich DATE NOT NULL as Zurich,
    Zurich_Carbon_Monoxide INT NOT NULL,
    Zurich_UV_Index FLOAT NOT NULL,
    Honolulu DATE NOT NULL,
    Honolulu_Carbon_Monoxide INT NOT NULL,
    Honolulu_UV_Index FLOAT NOT NULL,
	Reykjavik DATE NOT NULL,
	Reykjavik_Carbon_Monoxide INT NOT NULL,
	Reykjavik_UV_Index FLOAT NOT NULL,
	Hobart DATE NOT NULL,
    Hobart_Carbon_Monoxide INT NOT NULL,
    Hobart_UV_Index FLOAT NOT NULL,
	Funchal DATE NOT NULL,
	Funchal_Carbon_Monoxide INT NOT NULL,
	Funchal_UV_Index FLOAT NOT NULL
);

Select * From Small_Cities