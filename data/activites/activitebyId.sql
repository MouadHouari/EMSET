SELECT [activiteId]
      ,[titre]
      ,[description]
      ,[type]
      ,[lieu]
      ,[date]
      ,[userId]
  FROM [dbo].[activites]
WHERE [activiteId]=@activiteId