using System;
using System.Collections.Generic;
using System.Data;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;
using System.Diagnostics;

namespace ClassLibraryRepository
{
	public class ProductManager
	{
		public List<Products> products;
        public DatabaseHandler dbh;
		public ProductManager()
		{
			products = new List<Products>();
            dbh = new DatabaseHandler();
		}
		public void init() { 
			//this is for dummy data

		}
		public void loadData() {
            //this load the data from database
            dbh.newConnection();
            string sql = "SELECT id, genre from products";
            IDataReader reader = dbh.GetQueryResult(sql);
            Debug.WriteLine(sql);
            while (reader.Read()) {
                DatabaseHandler dbh2 = new DatabaseHandler();
                dbh2.newConnection();
                Products temp=new Products(Convert.ToInt16(reader["id"]), ""+reader["genre"]);
                string sql2 = "SELECT id, item, price, source, stock, product_id FROM productitem WHERE product_id="+reader["id"]+";";
                IDataReader reader2 = dbh2.GetQueryResult(sql2);
                while (reader2.Read()) {
                    temp.appendProductItem(new ProductItem(Convert.ToInt16(reader2["id"]), "" + reader2["item"], Convert.ToDouble(reader2["price"]), 
                                                           "" + reader2["source"], Convert.ToInt16(reader2["stock"]), Convert.ToInt16(reader2["product_id"])));
                }
                this.products.Add(temp);
            }
		}
        public string insertProduct(Products prod, string query) {
            return query + " INSERT INTO products(genre) values('" + prod.genre + "');";
        }
        public string insertProductItem(ProductItem pi, string query) {
            return query + " INSERT INTO productitem(item, price, source, stock, product_id) values('" + pi.item + "', " + pi.price + ", '" + pi.source + "', " + pi.stock + ", " + pi.product_id + ")";
        }
        public void addProduct(List<Products> prods) {
            string query = "";
            for (int i = 0; i < prods.Count; i++) {
                query = this.insertProduct(prods[i], query);
            }
            dbh.newConnection();
            dbh.ExecuteNonQuery(query);
        }
        public void addProductItem(List<ProductItem> pi) {
            string query = "";
            for (int i = 0; i < pi.Count; i++) {
                query = this.insertProductItem(pi[i], query);
            }
            dbh.newConnection();
            dbh.ExecuteNonQuery(query);
        }
		#region filters
        /*
		public List<Products> filterByType(int type) {
			List<Products> temp = new List<Products>();
			for (int i = 0; i < this.products.Count; i++) {
				if (this.products[i].numtype == type) {
					temp.Add(this.products[i]);
				}
			}
			return temp;
		}
		//filter by product name
		public List<Products> filterByProductName(string search) {
			List<Products> temp = new List<Products>();
			for (int i = 0; i < this.products.Count; i++) {
				if (this.products[i].productName.Contains(search)) {
					temp.Add(products[i]);
				}
			}
			return temp;
		}
        */
		#endregion
	}
}

