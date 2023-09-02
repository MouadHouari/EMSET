UPDATE [dbo].[activites]
SET [titre]=@titre,
    [description]=@description,
    [type]=@type,
    [lieu]=@lieu,
    [date]=@date,
    [userId]=@userId
WHERE [activiteId]=@activiteId

SELECT [activiteId]
      ,[titre]
      ,[description]
      ,[type]
      ,[lieu]
      ,[date]
      ,[userId]
  FROM [dbo].[activites]
WHERE [activiteId]=@activiteId