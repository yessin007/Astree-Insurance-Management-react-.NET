using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication1.Migrations
{
    /// <inheritdoc />
    public partial class m787 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_CompteBancaires_ParametrageAstrees_ParametrageAstreeId",
                table: "CompteBancaires");

            migrationBuilder.DropIndex(
                name: "IX_CompteBancaires_ParametrageAstreeId",
                table: "CompteBancaires");

            migrationBuilder.DropColumn(
                name: "ParametrageAstreeId",
                table: "CompteBancaires");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ParametrageAstreeId",
                table: "CompteBancaires",
                type: "nvarchar(450)",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_CompteBancaires_ParametrageAstreeId",
                table: "CompteBancaires",
                column: "ParametrageAstreeId");

            migrationBuilder.AddForeignKey(
                name: "FK_CompteBancaires_ParametrageAstrees_ParametrageAstreeId",
                table: "CompteBancaires",
                column: "ParametrageAstreeId",
                principalTable: "ParametrageAstrees",
                principalColumn: "Id");
        }
    }
}
