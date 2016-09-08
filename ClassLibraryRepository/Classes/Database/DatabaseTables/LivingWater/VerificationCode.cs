using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater
{
    public class VerificationCode
    {
        #region properties
        public int Id { get; set; }
        public string source { get; set; }
        public string answer { get; set; }
        #endregion
        public VerificationCode(int nId, string nSource, string nAnswer) {
            this.Id = nId;
            this.source = nSource;
            this.answer = nAnswer;
        }

    }
}
