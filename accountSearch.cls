
public with sharing class accountSearch {
    @AuraEnabled(cacheable=true)
    public static List<Account> SearchByAccount(String keyword) {
        String key = (keyword == null) ? '' : keyword.trim();
        if (key == '') {
            return new List<Account>();
        }
        // Use starts/contains search
        String likeExp = '%' + key + '%';
        return [
            SELECT Id, Name, Phone
            FROM Account
            WHERE Name LIKE :likeExp
            ORDER BY Name
            LIMIT 50
        ];
    }
}
