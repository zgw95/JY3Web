//һ��˾�����º������ܣ��������˿����˳��ƺţ���û��ȫ��
//��˵�����Ƶ�ǰ��λ��һ���ģ�
//��˵�����Ƶĺ���λ��һ���ģ�����ǰ��λ��һ���� 
//��˵��������һ�����ֵ�ƽ����
//�ٶ����ƺ�4λ�������дһ��������㳵�ƺ�

public class Jiaotong
{
	public static void main(String[] args)
	{
		int a,b;
		int total;
		for(int i=30;i<100;i++)
		{
			total = i*i;
			for(a=1;a<10;a++)
			{
				for(b=0;b<10;b++)
				{
					if(total == a*1000+a*100+b*10+b)
					{
						System.out.println("���ƺ��ǣ�"+total);
					}
				}
			}
		}
	}
}