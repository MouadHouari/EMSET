INSERT INTO [dbo].[activites]
    (
        [titre]
        ,[description]
        ,[type]
        ,[lieu]
        ,[date]
        ,[userId]
    )
VALUES 
    (
        @titre,
        @description,
        @type,
        @lieu,
        @date,
        @userId
    )

SELECT SCOPE_IDENTITY() AS activiteId