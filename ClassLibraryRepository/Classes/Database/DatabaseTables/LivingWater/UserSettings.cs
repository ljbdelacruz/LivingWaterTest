using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater
{
    public class UserSettings
    {
        #region properties
        public int Id { get; set; }
        public string username { get; set; }
        public int language_id { get; set; }
        public bool isadmin { get; set; }
        public bool islogin { get; set; }
        public int newsToModify { get; set; }
        public int process { get; set; }
        public bool successRegister { get; set; }
        public bool successCreatingConcern { get; set; }
        #endregion
        public UserSettings() {

        }

    }
}
