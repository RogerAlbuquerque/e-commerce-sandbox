using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Ecommerce.Infrastructure.Migrations
{
    /// <inheritdoc />
    public partial class changeTableTosnakeCase : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_categoriesproducts_categories_CategoryId",
                table: "categoriesproducts");

            migrationBuilder.DropForeignKey(
                name: "FK_categoriesproducts_products_ProductId",
                table: "categoriesproducts");

            migrationBuilder.DropForeignKey(
                name: "FK_products_productstates_ProductStateId",
                table: "products");

            migrationBuilder.DropPrimaryKey(
                name: "PK_products",
                table: "products");

            migrationBuilder.DropPrimaryKey(
                name: "PK_categories",
                table: "categories");

            migrationBuilder.DropPrimaryKey(
                name: "PK_productstates",
                table: "productstates");

            migrationBuilder.DropPrimaryKey(
                name: "PK_categoriesproducts",
                table: "categoriesproducts");

            migrationBuilder.RenameTable(
                name: "productstates",
                newName: "product_states");

            migrationBuilder.RenameTable(
                name: "categoriesproducts",
                newName: "categories_products");

            migrationBuilder.RenameColumn(
                name: "Stars",
                table: "products",
                newName: "stars");

            migrationBuilder.RenameColumn(
                name: "Size",
                table: "products",
                newName: "size");

            migrationBuilder.RenameColumn(
                name: "Price",
                table: "products",
                newName: "price");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "products",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "SecondaryImagesPath",
                table: "products",
                newName: "secondary_images_path");

            migrationBuilder.RenameColumn(
                name: "RegisterDate",
                table: "products",
                newName: "register_date");

            migrationBuilder.RenameColumn(
                name: "ProductStateId",
                table: "products",
                newName: "product_state_id");

            migrationBuilder.RenameColumn(
                name: "HexColor",
                table: "products",
                newName: "hex_color");

            migrationBuilder.RenameColumn(
                name: "FeaturedImagePath",
                table: "products",
                newName: "featured_image_path");

            migrationBuilder.RenameColumn(
                name: "ProductId",
                table: "products",
                newName: "product_id");

            migrationBuilder.RenameIndex(
                name: "IX_products_ProductStateId",
                table: "products",
                newName: "ix_products_product_state_id");

            migrationBuilder.RenameColumn(
                name: "Name",
                table: "categories",
                newName: "name");

            migrationBuilder.RenameColumn(
                name: "CategoryId",
                table: "categories",
                newName: "category_id");

            migrationBuilder.RenameColumn(
                name: "Sale",
                table: "product_states",
                newName: "sale");

            migrationBuilder.RenameColumn(
                name: "TopProduct",
                table: "product_states",
                newName: "top_product");

            migrationBuilder.RenameColumn(
                name: "NewProduct",
                table: "product_states",
                newName: "new_product");

            migrationBuilder.RenameColumn(
                name: "ProductStateId",
                table: "product_states",
                newName: "product_state_id");

            migrationBuilder.RenameColumn(
                name: "CreatedAt",
                table: "categories_products",
                newName: "created_at");

            migrationBuilder.RenameColumn(
                name: "CategoryId",
                table: "categories_products",
                newName: "category_id");

            migrationBuilder.RenameColumn(
                name: "ProductId",
                table: "categories_products",
                newName: "product_id");

            migrationBuilder.RenameIndex(
                name: "IX_categoriesproducts_CategoryId",
                table: "categories_products",
                newName: "ix_categories_products_category_id");

            migrationBuilder.AddPrimaryKey(
                name: "pk_products",
                table: "products",
                column: "product_id");

            migrationBuilder.AddPrimaryKey(
                name: "pk_categories",
                table: "categories",
                column: "category_id");

            migrationBuilder.AddPrimaryKey(
                name: "pk_product_states",
                table: "product_states",
                column: "product_state_id");

            migrationBuilder.AddPrimaryKey(
                name: "pk_categories_products",
                table: "categories_products",
                columns: new[] { "product_id", "category_id" });

            migrationBuilder.AddForeignKey(
                name: "fk_categories_products_categories_category_id",
                table: "categories_products",
                column: "category_id",
                principalTable: "categories",
                principalColumn: "category_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "fk_categories_products_products_product_id",
                table: "categories_products",
                column: "product_id",
                principalTable: "products",
                principalColumn: "product_id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "fk_products_product_states_product_state_id",
                table: "products",
                column: "product_state_id",
                principalTable: "product_states",
                principalColumn: "product_state_id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "fk_categories_products_categories_category_id",
                table: "categories_products");

            migrationBuilder.DropForeignKey(
                name: "fk_categories_products_products_product_id",
                table: "categories_products");

            migrationBuilder.DropForeignKey(
                name: "fk_products_product_states_product_state_id",
                table: "products");

            migrationBuilder.DropPrimaryKey(
                name: "pk_products",
                table: "products");

            migrationBuilder.DropPrimaryKey(
                name: "pk_categories",
                table: "categories");

            migrationBuilder.DropPrimaryKey(
                name: "pk_product_states",
                table: "product_states");

            migrationBuilder.DropPrimaryKey(
                name: "pk_categories_products",
                table: "categories_products");

            migrationBuilder.RenameTable(
                name: "product_states",
                newName: "productstates");

            migrationBuilder.RenameTable(
                name: "categories_products",
                newName: "categoriesproducts");

            migrationBuilder.RenameColumn(
                name: "stars",
                table: "products",
                newName: "Stars");

            migrationBuilder.RenameColumn(
                name: "size",
                table: "products",
                newName: "Size");

            migrationBuilder.RenameColumn(
                name: "price",
                table: "products",
                newName: "Price");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "products",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "secondary_images_path",
                table: "products",
                newName: "SecondaryImagesPath");

            migrationBuilder.RenameColumn(
                name: "register_date",
                table: "products",
                newName: "RegisterDate");

            migrationBuilder.RenameColumn(
                name: "product_state_id",
                table: "products",
                newName: "ProductStateId");

            migrationBuilder.RenameColumn(
                name: "hex_color",
                table: "products",
                newName: "HexColor");

            migrationBuilder.RenameColumn(
                name: "featured_image_path",
                table: "products",
                newName: "FeaturedImagePath");

            migrationBuilder.RenameColumn(
                name: "product_id",
                table: "products",
                newName: "ProductId");

            migrationBuilder.RenameIndex(
                name: "ix_products_product_state_id",
                table: "products",
                newName: "IX_products_ProductStateId");

            migrationBuilder.RenameColumn(
                name: "name",
                table: "categories",
                newName: "Name");

            migrationBuilder.RenameColumn(
                name: "category_id",
                table: "categories",
                newName: "CategoryId");

            migrationBuilder.RenameColumn(
                name: "sale",
                table: "productstates",
                newName: "Sale");

            migrationBuilder.RenameColumn(
                name: "top_product",
                table: "productstates",
                newName: "TopProduct");

            migrationBuilder.RenameColumn(
                name: "new_product",
                table: "productstates",
                newName: "NewProduct");

            migrationBuilder.RenameColumn(
                name: "product_state_id",
                table: "productstates",
                newName: "ProductStateId");

            migrationBuilder.RenameColumn(
                name: "created_at",
                table: "categoriesproducts",
                newName: "CreatedAt");

            migrationBuilder.RenameColumn(
                name: "category_id",
                table: "categoriesproducts",
                newName: "CategoryId");

            migrationBuilder.RenameColumn(
                name: "product_id",
                table: "categoriesproducts",
                newName: "ProductId");

            migrationBuilder.RenameIndex(
                name: "ix_categories_products_category_id",
                table: "categoriesproducts",
                newName: "IX_categoriesproducts_CategoryId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_products",
                table: "products",
                column: "ProductId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_categories",
                table: "categories",
                column: "CategoryId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_productstates",
                table: "productstates",
                column: "ProductStateId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_categoriesproducts",
                table: "categoriesproducts",
                columns: new[] { "ProductId", "CategoryId" });

            migrationBuilder.AddForeignKey(
                name: "FK_categoriesproducts_categories_CategoryId",
                table: "categoriesproducts",
                column: "CategoryId",
                principalTable: "categories",
                principalColumn: "CategoryId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_categoriesproducts_products_ProductId",
                table: "categoriesproducts",
                column: "ProductId",
                principalTable: "products",
                principalColumn: "ProductId",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_products_productstates_ProductStateId",
                table: "products",
                column: "ProductStateId",
                principalTable: "productstates",
                principalColumn: "ProductStateId",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
