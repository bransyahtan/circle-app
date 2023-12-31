import { MigrationInterface, QueryRunner } from "typeorm";

export class MyMigration1703235128133 implements MigrationInterface {
    name = 'MyMigration1703235128133'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "threads" ("id" SERIAL NOT NULL, "content" character varying NOT NULL, "image" character varying, "posted_at" date NOT NULL DEFAULT now(), "userId" integer, CONSTRAINT "PK_d8a74804c34fc3900502cd27275" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "users" ("id" SERIAL NOT NULL, "username" character varying NOT NULL, "fullName" character varying NOT NULL, "email" character varying NOT NULL, "password" character varying NOT NULL, "profilePicture" character varying DEFAULT 'https://via.placeholder.com/200', "profileDescription" character varying DEFAULT 'halo saya pengguna baru', CONSTRAINT "PK_a3ffb1c0c8416b9fc6f907b7433" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "threads" ADD CONSTRAINT "FK_256dd2e4946d6768c5583caa072" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "threads" DROP CONSTRAINT "FK_256dd2e4946d6768c5583caa072"`);
        await queryRunner.query(`DROP TABLE "users"`);
        await queryRunner.query(`DROP TABLE "threads"`);
    }

}
