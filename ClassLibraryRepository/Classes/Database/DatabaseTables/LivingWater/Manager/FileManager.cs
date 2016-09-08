using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;

namespace ClassLibraryRepository
{
	public class FileManager
	{
		#region properties 
		public List<File> file;
		#endregion

		#region constructors
		public FileManager()
		{
			file = new List<File>();
		}
		private void loadFiles() { 
			//here is where load all the files from database
		}
		#endregion

		#region filters
		public List<File> filterByPageID(int page_id)
		{
			List<File> temp = new List<File>();
			for (int i = 0; i < this.file.Count; i++)
			{
				if (this.file[i].page_id == page_id)
				{
					temp.Add(this.file[i]);
				}
			}
			return temp;
		}
		#endregion


	}
}

