﻿using System;
using System.Collections.Generic;
using System.Data;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;
using System.Diagnostics;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater.Util;
namespace ClassLibraryRepository
{
	public class ProductManager
	{
		public List<Products> products;
        public DatabaseHandler dbh;
        public DatabaseQuery dq;
		public ProductManager()
		{
			products = new List<Products>();
            dbh = new DatabaseHandler();
            dq = new DatabaseQuery();
		}
		public void init() { 
			//this is for dummy data

		}
		public void loadData() {
            //this load the data from database
            dbh.newConnection();
            string sql = dq.GetProductGenre();
            IDataReader reader = dbh.GetQueryResult(sql);
            Debug.WriteLine("STOPPED "+sql);
            while (reader.Read()) {
                DatabaseHandler dbh2 = new DatabaseHandler();
                dbh2.newConnection();
                Products temp=new Products(Convert.ToInt16(reader["id"]), ""+reader["genre"]);
                string sql2 = dq.GetProductItem(Convert.ToInt16(reader["id"]));
                IDataReader reader2 = dbh2.GetQueryResult(sql2);
                while (reader2.Read()) {
                    temp.appendProductItem(new ProductItem(Convert.ToInt16(reader2["id"]), "" + reader2["item"], Convert.ToDouble(reader2["price"]), 
                                                           "" + reader2["source"], Convert.ToInt16(reader2["stock"]), Convert.ToInt16(reader2["product_id"]), ""+reader2["content"]));
                }
                this.products.Add(temp);
            }
		}
        public void loadSpecificGenre(string genre) {
            dbh.newConnection();
            string sql = dq.GetProductGenre(genre);
            IDataReader reader = dbh.GetQueryResult(sql);
            Debug.WriteLine(sql);
            while (reader.Read())
            {
                DatabaseHandler dbh2 = new DatabaseHandler();
                dbh2.newConnection();
                Products temp = new Products(Convert.ToInt16(reader["id"]), "" + reader["genre"]);
                string sql2 = dq.GetProductItem(Convert.ToInt16(reader["id"]));
                IDataReader reader2 = dbh2.GetQueryResult(sql2);
                while (reader2.Read())
                {
                    temp.appendProductItem(new ProductItem(Convert.ToInt16(reader2["id"]), "" + reader2["item"], Convert.ToDouble(reader2["price"]),
                                                           "" + reader2["source"], Convert.ToInt16(reader2["stock"]), Convert.ToInt16(reader2["product_id"]), ""+reader2["content"]));
                }
                this.products.Add(temp);
            }
        }
        public string insertProduct(Products prod, string query) {
            return dq.insertProduct(prod, query);
        }
        public string insertProductItem(ProductItem pi, string query) {
            return dq.insertProductItem(pi, query);
        }
        public void addProduct(Products prod) {
            string query = insertProduct(prod, "");
            dbh.newConnection();
            dbh.ExecuteNonQuery(query);
        }
        public void addProductItem(List<ProductItem> pi) {
            dbh.newConnection();
            string query = "";
            for (int i = 0; i < pi.Count; i++) {
                query = dq.insertProductItem(pi[i], query);
            }
            dbh.ExecuteNonQuery(query);
        }
        public void updateProductItem(ProductItem pi) {
            dbh.newConnection();
            string sql=dq.updateProductItem(pi, "");
            Debug.WriteLine(sql);
            dbh.ExecuteNonQuery(sql);
            dbh.CloseConnection();
            Debug.WriteLine("Done!");
        }
        public void deleteProductItem(List<ProductItem> lpi) {
            dbh.newConnection();
            string sql = "";
            for (int i = 0; i < lpi.Count; i++) {
                sql = dq.deleteProductItem(lpi[i].id, sql);
            }
            Debug.WriteLine(sql);
            dbh.ExecuteNonQuery(sql);
            dbh.CloseConnection();
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

