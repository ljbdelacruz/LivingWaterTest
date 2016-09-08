using System;
using ClassLibraryRepository;
using System.Collections.Generic;
namespace ClassLibraryRepository.Classes.Database.DatabaseTables.OSS
{
	public class InboxManager
	{
		public int id { get; set; }
		public List<ItemConcern> itemConcern;

		public InboxManager(int nId)
		{
			this.id = nId;
		}
		public void appendItemConcern(ItemConcern itmConcern) {
			this.itemConcern.Add(itmConcern);
		}

	}
}

