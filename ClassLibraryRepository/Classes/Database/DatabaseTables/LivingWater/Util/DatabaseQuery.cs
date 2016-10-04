using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace ClassLibraryRepository.Classes.Database.DatabaseTables.LivingWater.Util
{
    public class DatabaseQuery
    {
        public DatabaseQuery() {

        }
        #region products
        public string GetProductGenre() {
            return "SELECT id, genre from products";
        }
        public string GetProductGenre(string genre) {
            return "SELECT id, genre from products WHERE genre='" + genre + "'; ";
        }
        public string GetProductItem(int prod_id) {
            return "SELECT id, item, price, source, stock, product_id, content FROM productitem WHERE product_id=" + prod_id + ";";
        }
        
        public string insertProduct(Products prod, string query) {
            return query + "INSERT INTO products(genre) values('" + prod.genre + "');";
        }
        public string insertProductItem(ProductItem pi, string query) {
            return query + " INSERT INTO productitem(item, price, source, stock, product_id) values('" + pi.item + "', " + pi.price + ", '" + pi.source + "', " + pi.stock + ", " + pi.product_id + ");";
        }
        public string findProductID(string genre) {
            return "SELECT id from products WHERE genre='"+genre+"'; ";
        }
        public string updateProductItem(ProductItem pi, string query) {
            return query+" UPDATE productitem SET item='"+pi.item+"', price="+pi.price+", source='"+pi.source+"', product_id="+pi.product_id+", content='"+pi.content+"' WHERE id="+pi.id+"; ";
        }
        public string deleteProductItem(int id, string query) {
            return query + " DELETE FROM productitem WHERE id=" + id + "; ";
        }
        #endregion

        #region inbox
        public string GetInbox(int receiver_id) {
            return "select i.id AS id, u.username AS username, i.receiver_id AS receiver_id, i.sender_id AS sender_id, i.subject AS subject, i.dateCreated AS dateCreated" +
                   " FROM user u, inbox i WHERE i.sender_id = u.id AND i.receiver_id = " + receiver_id + " OR i.sender_id = " + receiver_id + " AND u.id = i.receiver_id ORDER BY i.dateCreated desc;";
        }
        public string GetInboxContent(int id) {
            return "SELECT id, message, unread, dateSent, inbox_id FROM inboxContent WHERE inbox_id=" + id + "; ";
        }
        public string InsertNewMessageContent(InboxContent ic, string query) {
            return query + " insert inboxContent(message, unread, inbox_id, dateSent) values('" + ic.message + "', " + ic.unread + ", " + ic.inbox_id + ", NOW());";
        }
        public string concatDeleteInbox(string query, int id) {
            return query + " DELETE FROM inbox WHERE id=" + id + "; "; 
        }
        public string concatDeleteInboxContent(string query, int id) {
            return query + " DELETE FROM inboxContent WHERE id=" + id + ";";
        }
        #endregion

        #region News
        public string GetNews() {
            return "SELECT id, title, content FROM news";
        }
        public string GetNews(int id) {
            return "SELECT id, title, content from news WHERE id="+id+"; ";
        }
        public string GetNewsImages(int news_id) {
            return "SELECT id, image, path, width, height, page_id, news_id FROM news_image WHERE news_id="+news_id+";";
        }
        public string GetNewsVideos(int news_id) {
            return "SELECT * FROM news_videos WHERE news_id="+news_id+";";
        }
        public string InsertNews(News news, string query) {
            return query + " INSERT INTO news(title, content) values('"+news.title+"', '"+news.content+"')";
        }
        public string GetNewlyAddedNews(News news, string query) {
            return query + " SELECT id FROM news WHERE title='"+news.title+"', AND content='"+news.content+"'; ";
        }
        public string InsertNewsImages(Images img, string query) {
            return query + " INSERT INTO newsimage(image, path, width, height, page_id, news_id) values('"+img.image+"', '"+img.path+"', "+img.width+", "+img.height+", "+img.page_id+", "+img.news_id+");";
        }
        public string InsertNewsVides(Video vid, string query) {
            return query + " INSERT INTO newsvideos(title, design, type, width, height, source, thumbnail, frameborder, news_id, page_id) values('"+vid.title+"', '"+vid.design+"', '"+vid.type+"', "+vid.width+", "+vid.height+", '"+vid.source+"', '"+vid.thumbnail+"', "+vid.frameborder+", "+vid.news_id+", "+vid.page_id+");";
        }
        #endregion

        #region Users
        public string GetUserInformation() {
            return "select u.id AS id, " +
                        " ui.firstname AS fn," +
                        " ui.middlename AS mn," +
                        " ui.lastname AS ln," +
                        " month(ui.birthday) AS Month," +
                        " day(ui.birthday)AS Day," +
                        " year(ui.birthday) AS Year," +
                        " ui.age AS Age," +
                        " u.username AS user," +
                        " u.password AS pass," +
                        " us.language_id AS lang," +
                        " us.isadmin AS isadmin" +
                        " from user AS u, userInfo AS ui, usersettings AS us" +
                        " WHERE ui.user_id = u.id AND us.user_id = u.id;";
        }
        public string GetUserInformation(int user_id) {
            return " select u.id AS id, " +
                " ui.firstname AS fn," +
                " ui.middlename AS mn," +
                " ui.lastname AS ln," +
                " month(ui.birthday) AS Month," +
                " day(ui.birthday)AS Day," +
                " year(ui.birthday) AS Year," +
                " ui.age AS Age," +
                " u.username AS user," +
                " u.password AS pass," +
                " us.language_id AS lang," +
                " us.isadmin AS isadmin" +
                " from user AS u, userInfo AS ui, usersettings AS us" +
                " WHERE u.id = " + user_id + " AND ui.user_id = u.id AND us.user_id = u.id;";
        }
        public string GetNewlyAddedUser(UserProfile user) {
            return "SELECT id from user WHERE username='" + user.username + "' AND password=MD5('" + user.password + "')";
        }
        public string GetIsUnique(string username, string password) {
            return "select count(*) AS exist, id FROM user WHERE username = '" + username + "' AND password='" + password + "';";
        }
        public string GetIsUnique(string username) {
            return "select count(*) AS exist, id FROM user WHERE username = '" + username + "'; ";
        }
        public string insertNewUser(UserProfile user, string query) {
            return query + " INSERT INTO user(username, password) values('" + user.username + "', MD5('" + user.password + "'));";
        }
        public string insertNewUserInfo(UserProfile up, string query) {
            return query + "insert userInfo(firstname, middlename, lastname, birthday, age, sex, user_id)" +
                           "values('" + up.firstname + "', '" + up.middlename + "', '" + up.lastname + "', '" + up.birthYear + "-" + up.birthMonth + "-" + up.birthDay + "', " + up.age + ", '" + up.sex + "', " + up.Id + ");";
        }
        public string insertUserSettings(UserProfile up, string query) {
            return query + "insert usersettings(isadmin, verified, language_id, user_id)" +
                         "values(false, false, " + up.language_id + ", " + up.Id + ");";
        }
        #endregion

        #region database handler
        public string GetMD5Values(string value) {
            return "SELECT MD5('" + value + "') AS result";
        }
        #endregion

        #region Globalization

        #endregion

    }
}
