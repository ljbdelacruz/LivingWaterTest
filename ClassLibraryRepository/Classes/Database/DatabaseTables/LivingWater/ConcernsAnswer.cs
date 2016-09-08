using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater;

namespace ClassLibraryRepository
{
	public class ConcernsAnswer
	{
		#region properties
		public int Id { get; set; }
		public List<ConcernsAnswerRate> rating;

		#endregion

		#region constructors
		public ConcernsAnswer()
		{
			
		}

		#endregion

		#region functionality
		public int totalRating() {
			int sum = 0;
			for (int i = 0; i < this.rating.Count; i++) {
				sum += this.rating[i].answer_rate;
			}
			return sum / this.rating.Count;
		}
		#endregion


	}
}

