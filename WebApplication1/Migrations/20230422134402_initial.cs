using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace WebApplication1.Migrations
{
    /// <inheritdoc />
    public partial class initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "AspNetRoles",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoles", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUsers",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    FirstName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    LastName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedUserName = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    Email = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    NormalizedEmail = table.Column<string>(type: "nvarchar(256)", maxLength: 256, nullable: true),
                    EmailConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    PasswordHash = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    SecurityStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ConcurrencyStamp = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumber = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PhoneNumberConfirmed = table.Column<bool>(type: "bit", nullable: false),
                    TwoFactorEnabled = table.Column<bool>(type: "bit", nullable: false),
                    LockoutEnd = table.Column<DateTimeOffset>(type: "datetimeoffset", nullable: true),
                    LockoutEnabled = table.Column<bool>(type: "bit", nullable: false),
                    AccessFailedCount = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUsers", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "AvisDebits",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ReassureurName = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Lib_Reglement = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Montant = table.Column<double>(type: "float", nullable: false),
                    ReagtAccept = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Obs = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Exercice = table.Column<DateTime>(type: "datetime2", nullable: false),
                    CompteBancaire = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AvisDebits", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DetailTransferts",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Nationalite = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Adresse = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PaysTransfer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CodeSwift = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CodeBic = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Banc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    AdresseBanc = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Aff_Suivie_Pai = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Ref_Lettre_Reass = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Ref_Lettre_Bt = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MontantDt = table.Column<double>(type: "float", nullable: true),
                    MontantDev = table.Column<double>(type: "float", nullable: true),
                    VirementEn = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    RefBancAstree = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Motif = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    MotifDev = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DetailTransferts", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "ParametrageAstrees",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ReseauxSociaux = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Matricule = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Adresse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Tel = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_ParametrageAstrees", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Reassureurs",
                columns: table => new
                {
                    ReassureurId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Password = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Telephone = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Nom = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Nationalite = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Adresse = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    PaysTransfer = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    CodeSwift = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    codeBic = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Reassureurs", x => x.ReassureurId);
                });

            migrationBuilder.CreateTable(
                name: "AspNetRoleClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetRoleClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetRoleClaims_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserClaims",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ClaimType = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ClaimValue = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserClaims", x => x.Id);
                    table.ForeignKey(
                        name: "FK_AspNetUserClaims_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserLogins",
                columns: table => new
                {
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderKey = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ProviderDisplayName = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserLogins", x => new { x.LoginProvider, x.ProviderKey });
                    table.ForeignKey(
                        name: "FK_AspNetUserLogins_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserRoles",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    RoleId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserRoles", x => new { x.UserId, x.RoleId });
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetRoles_RoleId",
                        column: x => x.RoleId,
                        principalTable: "AspNetRoles",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_AspNetUserRoles_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "AspNetUserTokens",
                columns: table => new
                {
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    LoginProvider = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Name = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Value = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_AspNetUserTokens", x => new { x.UserId, x.LoginProvider, x.Name });
                    table.ForeignKey(
                        name: "FK_AspNetUserTokens_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "CompteBancaires",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    NumeroCompte = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RIB = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    IBAN = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Banque = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Agence = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Adresse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    ParametrageAstreeId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    ReassureurId = table.Column<string>(type: "nvarchar(450)", nullable: true),
                    DemandeTransfertId = table.Column<string>(type: "nvarchar(max)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CompteBancaires", x => x.Id);
                    table.ForeignKey(
                        name: "FK_CompteBancaires_ParametrageAstrees_ParametrageAstreeId",
                        column: x => x.ParametrageAstreeId,
                        principalTable: "ParametrageAstrees",
                        principalColumn: "Id");
                    table.ForeignKey(
                        name: "FK_CompteBancaires_Reassureurs_ReassureurId",
                        column: x => x.ReassureurId,
                        principalTable: "Reassureurs",
                        principalColumn: "ReassureurId");
                });

            migrationBuilder.CreateTable(
                name: "DemandeTransferts",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    date = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Nature = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Type = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Libelle = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Certificat = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    typeMontant = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Montant = table.Column<double>(type: "float", nullable: false),
                    Etat = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    ReassureurId = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    CompteBancaireId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DemandeTransferts", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DemandeTransferts_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DemandeTransferts_CompteBancaires_CompteBancaireId",
                        column: x => x.CompteBancaireId,
                        principalTable: "CompteBancaires",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_DemandeTransferts_Reassureurs_ReassureurId",
                        column: x => x.ReassureurId,
                        principalTable: "Reassureurs",
                        principalColumn: "ReassureurId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "SessionReassureurs",
                columns: table => new
                {
                    Id = table.Column<string>(type: "nvarchar(450)", nullable: false),
                    Reference = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Code = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Effet = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Risque = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Exercice = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Recours = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Commission = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Sinistre = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RrcConstitue = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RssConstitue = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PB = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Aed = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Solde = table.Column<double>(type: "float", nullable: false),
                    DateAuDebit = table.Column<DateTime>(type: "datetime2", nullable: false),
                    Num = table.Column<double>(type: "float", nullable: false),
                    Taux = table.Column<double>(type: "float", nullable: false),
                    Monnay = table.Column<double>(type: "float", nullable: false),
                    RefTransfert = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Devise = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Assure = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Bordereau = table.Column<int>(type: "int", nullable: true),
                    PrimesCode = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rrcli = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Rsslib = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Intere = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    TypeTraite = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    DemandeTransfertId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_SessionReassureurs", x => x.Id);
                    table.ForeignKey(
                        name: "FK_SessionReassureurs_DemandeTransferts_DemandeTransfertId",
                        column: x => x.DemandeTransfertId,
                        principalTable: "DemandeTransferts",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_AspNetRoleClaims_RoleId",
                table: "AspNetRoleClaims",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "RoleNameIndex",
                table: "AspNetRoles",
                column: "NormalizedName",
                unique: true,
                filter: "[NormalizedName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserClaims_UserId",
                table: "AspNetUserClaims",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserLogins_UserId",
                table: "AspNetUserLogins",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_AspNetUserRoles_RoleId",
                table: "AspNetUserRoles",
                column: "RoleId");

            migrationBuilder.CreateIndex(
                name: "EmailIndex",
                table: "AspNetUsers",
                column: "NormalizedEmail");

            migrationBuilder.CreateIndex(
                name: "UserNameIndex",
                table: "AspNetUsers",
                column: "NormalizedUserName",
                unique: true,
                filter: "[NormalizedUserName] IS NOT NULL");

            migrationBuilder.CreateIndex(
                name: "IX_CompteBancaires_ParametrageAstreeId",
                table: "CompteBancaires",
                column: "ParametrageAstreeId");

            migrationBuilder.CreateIndex(
                name: "IX_CompteBancaires_ReassureurId",
                table: "CompteBancaires",
                column: "ReassureurId");

            migrationBuilder.CreateIndex(
                name: "IX_DemandeTransferts_CompteBancaireId",
                table: "DemandeTransferts",
                column: "CompteBancaireId");

            migrationBuilder.CreateIndex(
                name: "IX_DemandeTransferts_ReassureurId",
                table: "DemandeTransferts",
                column: "ReassureurId");

            migrationBuilder.CreateIndex(
                name: "IX_DemandeTransferts_UserId",
                table: "DemandeTransferts",
                column: "UserId");

            migrationBuilder.CreateIndex(
                name: "IX_SessionReassureurs_DemandeTransfertId",
                table: "SessionReassureurs",
                column: "DemandeTransfertId");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "AspNetRoleClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserClaims");

            migrationBuilder.DropTable(
                name: "AspNetUserLogins");

            migrationBuilder.DropTable(
                name: "AspNetUserRoles");

            migrationBuilder.DropTable(
                name: "AspNetUserTokens");

            migrationBuilder.DropTable(
                name: "AvisDebits");

            migrationBuilder.DropTable(
                name: "DetailTransferts");

            migrationBuilder.DropTable(
                name: "SessionReassureurs");

            migrationBuilder.DropTable(
                name: "AspNetRoles");

            migrationBuilder.DropTable(
                name: "DemandeTransferts");

            migrationBuilder.DropTable(
                name: "AspNetUsers");

            migrationBuilder.DropTable(
                name: "CompteBancaires");

            migrationBuilder.DropTable(
                name: "ParametrageAstrees");

            migrationBuilder.DropTable(
                name: "Reassureurs");
        }
    }
}
