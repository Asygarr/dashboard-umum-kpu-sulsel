import { NextResponse } from 'next/server';

export async function GET() {


  try {
    return NextResponse.json({
      status: 200,
      message: 'Berhasil mendapatkan data',
    });
  } catch (e) {
    return NextResponse.error({
      status: 500,
      statusText: 'Ada masalah dengan server',
    })
  }
}
