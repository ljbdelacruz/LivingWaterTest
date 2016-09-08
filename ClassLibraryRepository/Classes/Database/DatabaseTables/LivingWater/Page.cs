using System;
using System.Collections.Generic;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;

namespace ClassLibraryRepository
{
	public class Page
	{
		#region properties
		public int Id { get; set; }
		public string house { get; set; }
		public List<Globalization> globalization;
		#endregion
		public Page()
		{
		}
		public Page(int nId, string nHouse)
		{
			this.Id = nId;
			this.house = nHouse;
		}
		public void appendGlobalization(Globalization glob) {
			this.globalization.Add(glob);
		}
	}
}

