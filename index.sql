CREATE TABLE tabla1
(
	id			number( 2,0 ),
	nombre		varchar2( 50 ),
	apellido	varchar2( 50 ),

	CONSTRAINT pk_tabla1 PRIMARY KEY ( id )
);

CREATE SEQUENCE sq_tabla1 MINVALUE 1 MAXVALUE 99 INCREMENT BY 1 START WITH 1 NOCACHE;

CREATE OR REPLACE TRIGGER tg_tabla1
	BEFORE INSERT ON tabla1
	FOR EACH ROW
BEGIN
  SELECT sq_tabla1.nextval INTO :new.id FROM dual;
END;