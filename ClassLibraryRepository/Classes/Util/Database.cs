using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using MySql.Data.MySqlClient;
using System.Data;
using System.Diagnostics;

namespace ClassLibraryRepository
{
	public class Database
	{
		private string connectionString { get; set; }
		private IDbConnection dbcon;
		private IDbCommand dbcmd;
		public Database(string nServer, string nUsername, string nPassword, string nDatabase) {
			this.connectionString = "Server=" + nServer + ";" +
									"Database=" + nDatabase + ";" +
									"User=" + nUsername + ";" +
									"Password=" + nPassword + ";" +
									"Pooling=false;";
			dbcon = new MySqlConnection(this.connectionString);
            this.OpenConnection();
			dbcmd = dbcon.CreateCommand();
		}
        public void OpenConnection() {
            try
            {
                this.dbcon.Open();
            }
            catch {
                Debug.WriteLine("Error Upon Opening Connection From Server");
            }
        }
		public IDataReader GetQueryResult(string sql)
		{
            try
            {
                dbcmd.CommandText = sql;
                IDataReader reader = dbcmd.ExecuteReader();
                return reader;
            }
            catch{
                Debug.WriteLine("Error When Executing this query " + sql);
            }
            return null;
		}
		public void ExecuteNonQuery(string sql) {
            try
            {
                dbcmd.CommandText = sql;
                dbcmd.ExecuteNonQuery();
            }
            catch {
                Debug.WriteLine("Error Upon Executing Non Query");
            }
		}
		public void CloseConnection() {
            try
            {
                dbcon.Close();
            }
            catch {
                Debug.WriteLine("Error Upon closing connection");
            }
		}
	}
}

